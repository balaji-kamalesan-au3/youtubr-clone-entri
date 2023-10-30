function FilterChips(props) {
  return <div className='text-[#0F0F0F] bg-[#0000000D] inline m-[12px] ml-[0px] px-[12px] py-[5px] rounded-lg cursor-pointer'>
    {props.name}
  </div>
}


var filters = ["All", "A R Rahman", "Anirudh Ravichander", "Vidyasagar", "New Boston", "Justin Biber"]

export default function renderChips() {
  var returnArray = []
  for (let i = 0; i < filters.length; i++) {
    returnArray.push(<FilterChips name={filters[i]} />)
  }
  return returnArray
}