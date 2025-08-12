import Navbar from "./Navabr";

function Dashboard() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex gap-0 flex-row flex-nowrap items-stretch">
        <div className="grow w-[75%] h-3/4  m-2">
          <div className="flex gap-[1.1%] flex-wrap content-start m-1">
            <div className="w-[255px] h-[150px] rounded-md shadow bg-blue-300">
              1
            </div>
            <div className="w-[255px] h-[150px] rounded-md shadow bg-blue-400">
              2
            </div>
            <div className="w-[255px] h-[150px] rounded-md shadow bg-blue-300">
              3
            </div>
            <div className="w-[255px] h-[150px] rounded-md shadow bg-blue-400">
              4
            </div>
          </div>
          <br />
          <div className="flex gap-[1.1%] flex-wrap content-start">
            <div className="w-[49%] h-[250px] rounded-md shadow bg-blue-300">
              1
            </div>
            <div className="w-[49%] h-[250px] rounded-md shadow bg-blue-400">
              2
            </div>
          </div>
          <br />
          <h2 className="normal-case text-xl">Coustomer Reviews</h2>
          <div className="flex gap-[4.2%] flex-wrap content-start m-1">
            <div className="w-[30%] h-[150px] rounded-md shadow bg-blue-300">
              1
            </div>
            <div className="w-[30%] h-[150px] rounded-md shadow bg-blue-400">
              2
            </div>
            <div className="w-[30%] h-[150px] rounded-md shadow bg-blue-300">
              3
            </div>
          </div>
          <br />
          <div className="flex gap-[1%] flex-wrap content-start m-1">
            <div className="w-[74%] h-[200px] ml- rounded-md shadow bg-blue-300">
              1
            </div>
            <div className="w-[25%] h-[200px] rounded-md shadow bg-blue-400">
              2
            </div>
          </div>
          <div></div>
        </div>
        <div className="grow w-[25%] order-1 m-1">
          <div className="flex gap-[10px] flex-col">
            <div className="w-auto h-[100px] bg-gray-100 rounded shadow">1</div>
            <div className="w-auto h-[100px] bg-gray-200 rounded shadow">2</div>
            <div className="w-auto h-[100px] bg-gray-100 rounded shadow">3</div>
            <div className="w-auto h-[100px] bg-gray-200 rounded shadow">4</div>
            <div className="w-auto h-[100px] bg-gray-100 rounded shadow">5</div>
            <div className="w-auto h-[100px] bg-gray-200 rounded shadow">6</div>
            <div className="w-auto h-[100px] bg-gray-100 rounded shadow">7</div>
            <div className="w-auto h-[100px] bg-gray-200 rounded shadow">8</div>
          </div>
        </div>
      </div>
      <div className="flex gap-[2%] flex-wrap content-end flex-row justify-center items-start bg-yellow-500 h-[5%] rounded-b-lg shadow">
        <div className="w-full h-[5%]">Footer</div>
      </div>
    </div>
  );
}

export default Dashboard;
