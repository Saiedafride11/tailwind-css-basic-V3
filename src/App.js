import './App.css';

function App() {
  return (
    // <div class="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
    //   <div class="max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-2 sm:flex sm:items-center sm:py-4 sm:space-y-0 sm:space-x-6 dark:bg-gray-800 sm:dark:hover:bg-gray-700">
    //     <img class="h-24 mx-auto rounded-full ring-4 ring-green-400 sm:mx-0 sm:flex-shrink-0 transform hover:scale-105 duration-500" src="https://raw.githubusercontent.com/learnwithsumit/tailwind-playlist/lesson-3/images/logo.png" alt="Learn with Sumit logo" />
    //     <div class="text-center space-y-2 sm:text-left">
    //       <div class="space-y-0.5">
    //         <h1 class="text-lg text-black font-semibold dark:text-gray-300">Learn with Sumit</h1>
    //         <p class="text-body text-gray-500 font-medium dark:text-gray-400">YouTube Channel</p>
    //       </div>
    //       <button class="btn btn-purple">Visit now</button>
    //       <button class="btn btn-green ml-2">Website</button>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div
            class="w-full text-xl text-gray-600 first-letter:text-4xl first-letter:text-blue-600 selection:bg-red-300 dark:md:hover:bg-green-300"
        >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            dignissimos incidunt tenetur voluptatem reiciendis temporibus? Omnis
            minus voluptatibus quis deserunt facere consequatur, natus, suscipit
            eius molestias aut eveniet in tempora.
        </div>

        <div class="mt-10">
            <label
                for="email"
                class="after:content-['*'] after:ml-1 text-[#e5e5e5]"
                >Email</label
            >
        </div>
    </div>
  );
}

export default App;
