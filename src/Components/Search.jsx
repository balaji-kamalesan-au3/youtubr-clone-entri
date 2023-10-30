import { useEffect, useState } from "react"
var sampleAPI = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=leo&type=video&key='

export default function Search() {
  const myPara = "The Neue Nationalgalerie is a museum for modern art in Berlin, Germany, with its main focus on the 20th century. It is part of the National Gallery of the Berlin State Museums. The museum building and its sculpture gardens were designed by Ludwig Mies van der Rohe and opened in 1968, with a modernist design and constructed largely from steel and glass. Neue Nationalgalerie serves as a repository for a notable collection of 20th-century European art. Its holdings include masterpieces by prominent figures such as Pablo Picasso, Wassily Kandinsky, Ernst Ludwig Kirchner, and Joan Miró. The gallery closed in 2015 for renovation works, and reopened in August 2021 with an exhibition of works by American sculptor Alexander Calder. This photograph is a view of the western and southern façades of the building, with Calder's sculpture Têtes et Queue in the foreground. NallSevugan"

  const [currentData, setData] = useState(myPara.split(" "));
  const [filteredData, setFilteredData] = useState([]);
  const [value, setValue] = useState("")
  const [showCard, setShowCard] = useState(false)

  function filterData(keyWord) {
    setFilteredData(currentData.filter(word => word.includes(keyWord)));
  }

  useEffect(function () {
    if (value.length === 0) {
      setShowCard(false)
      setFilteredData([]);
    }
    else {
      filterData(value)
      setShowCard(true)
    }
  }, [value])



  return <div className="relative">
    <div className=" mt-[30px] border-[1px] border-[#ccc] w-[50%] px-[20px] py-[2px] rounded-[30px]">
      <input type="text" value={value} placeholder="Enter Search" onChange={(e) => { setValue(e.target.value); }} />
    </div>
    {showCard && <div style={{ zIndex: 999 }} className="rounded-[10px] bg-white border-[0.5px] border-black  w-[300px] absolute">
      {filteredData.map(data => {
        return <div>{data}</div>
      })}
    </div>}
  </div>
}