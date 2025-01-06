function Stripe({val}) {
    return (
      <div className="max-w-72 px-4 py-3 border-[1.2px]  border-zinc-600 flex justify-between items-center">
        <span ><img src={val.url} alt="" /></span>
        <span className="font-semibold">{val.number}</span>
      </div>
    );
  }
  
  export default Stripe;