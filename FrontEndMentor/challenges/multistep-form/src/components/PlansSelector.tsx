
import { PlanCard } from './PlanCard'
import { plan } from '../store/OrderContext';
import { useOrderContext } from '../store/OrderContext';


interface Props{
    isSelected:boolean;
}



export const PlansSelector = ({isSelected}:Props) => {

   const {order, setOrder}= useOrderContext();
    const {plans, client, monthly, addons} = order;
  
    const handleSelect=(plan:plan)=>{
        const {id, name} = plan;
        setOrder((prev)=>{
            const {client, plans, monthly, addons, total}= prev;
            const updatePlan = plans.map((plan)=>{
                const {id:planId, name, price, img, select} = plan
                if(plan.id === id){
                    return {id: planId, name, price, img, select:!select}
                }else {
                    return{...plan, select:false}
                }
            })
          return{client, plans:updatePlan, monthly, addons, total}   
        })
    }
    
    const handleMontly=()=>{
      setOrder((prev)=>({
            ...prev, monthly: !monthly
      }))
    }

    

  return (
    <div className='plan__section'>
        <div className='plan__items'>
            {Object.values(plans).map(plan=>(
                <PlanCard key={plan.id} title={plan.name} price={plan.price} img={plan.img} handleSelect={()=>handleSelect(plan)} isSelected={plan.select} monthly={monthly}/>
            ))}
        </div>
        <div className='plan__btn'>
            <span>Monthly</span>
                <div className={`btn__area ${monthly? "":"isMonthly"}` }onClick={handleMontly}>
                    <div className={`btn__circle`} ></div>
                </div>
            <span>Yearly</span>
        </div>
        {isSelected&&<span className={'error__message'}>Please Choose a Plan</span>}
    </div>
  )
}
