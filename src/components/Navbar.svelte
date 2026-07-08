<script>

  export let menu_open;

  let y = 0;

  $: scrolled = y > 80;

  function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
  }

  const handleCyclo = (e) => {
    e.preventDefault()
    let button = e.target.closest('[data-target]');
    let target = button.getAttribute('data-target');
    let offset = button.getAttribute('data-offset');
    
    window.scroll({
      left:0,
      top:findPos(document.getElementById(target))-offset, 
      behavior:'smooth'
    });

    menu_open = !menu_open
    
  }

</script>

<svelte:window bind:scrollY={y}/>



<div id="navbar" class="w-64 min-h-screen   sm:w-full sm:min-h-0 sm:h-20 py-8 sm:py-3 bg-white  left-0 top-0 
    sm:items-center
     ease-in-out transition-all transform duration-300
    -translate-x-full sm:translate-x-0 fixed z-50 
     {menu_open?'translate-x-0':''} {scrolled?'md:bg-white':'bg-transparent'}
    ">
  


    <div class="flex bg-white top-4 absolute sm:hidden ">    
      <button on:click="{()=> menu_open = !menu_open }" class="z-50 bg-white cursor-pointer fixed right-5 w-8 h-8 mb-8 text-xl ml-auto transition duration-150 hover:shadow leading-none px-2 py-1  rounded bg-transparent block outline-none focus:outline-none" type="button">
        <span class="block absolute w-6 h-0.5 rounded-sm bg-black top-3 duration-500 { menu_open ? 'opacity-0':'' }" ></span>
        <span class="block absolute w-6 h-0.5 rounded-sm bg-black duration-500 { menu_open ? 'transform rotate-45':'' }"></span>
        <span class="block absolute w-6 h-0.5 rounded-sm bg-black duration-500 { menu_open ? 'transform -rotate-45':'' }"></span>
        <span class="block absolute w-6 h-0.5 rounded-sm bg-black bottom-2.5 duration-500 { menu_open ? 'opacity-0':'' }"></span>
      </button>
    </div>




    <div class="px-5 max-w-7xl sm:mt-0 mt-16  mx-auto sm:flex sm:items-center sm:justify-between">
      <div class=" md:mx-10 m-0  font-medium w-fit p-0 rounded-md flex items-center justify-center">
       
        <img src="/img/2026/btlogo_2026.svg" alt="logo" class=" {scrolled?'h-12':'h-16'} {scrolled?'flex':'hidden'}">
      </div>

      <nav>
        <ul class="sm:flex md:text-xs  w-full">
         
          <li on:click="{()=> menu_open = !menu_open }"  class="w-fit px-3 py-2 transform hover:text-[#e82277] transition duration-500 hover:scale-100" >
            <a href="/" class=" text-[#591CBC] font-bold hover:text-[#e82277] font-data uppercase text-sm">Home</a>
          </li>
          
            <li on:click="{()=> menu_open = !menu_open }"  class="w-fit px-3 py-2 transform hover:text-[#e82277] transition duration-500 hover:scale-100">
              <a href="/#about" class="page-scroll text-[#591CBC] font-bold hover:text-[#e82277] font-data uppercase text-sm ">About</a>
            </li>
         
            <li on:click="{()=> menu_open = !menu_open }"  class=" w-fit px-3 py-2 transform hover:text-[#e82277] transition duration-500 hover:scale-100">
              <a href="/#Speakers" class="page-scroll text-[#591CBC] font-bold hover:text-[#e82277] font-data uppercase text-sm ">Speakers</a>
            </li>

            <li on:click="{()=> menu_open = !menu_open }"  class=" w-fit px-3 py-2 transform hover:text-[#e82277] transition duration-500 hover:scale-100">
              <a href="/#Schedule" class="page-scroll text-[#591CBC] font-bold hover:text-[#e82277] font-data uppercase text-sm ">Schedule</a>
            </li>
          
           <li on:click="{()=> menu_open = !menu_open }" class="w-fit px-3 py-2 transform hover:text-[#e82277] transition duration-500 hover:scale-100">
            <a href="/2025" target="_blank" class=" text-[#591CBC] font-bold hover:text-[#e82277] font-data uppercase text-sm">Previous Edition</a>
          </li>
            <li on:click="{()=> menu_open = !menu_open }" class="w-fit px-3 py-2 transform hover:text-[#e82277] transition duration-500 hover:scale-100">
              <a href="/#contact" class="page-scroll text-[#591CBC] font-bold hover:text-[#e82277] font-data uppercase text-sm">Contact</a>
            </li>
           <!-- <li>
            <a class="thm-btn px-3 py-2 brd-btn" href="https://forms.startupmission.in/keralastartupmission/form/RequestanInviteBeyondTomorrow/formperma/onB_zbTsiLSAygmhD1HZe7QHE1JMFWQJRLo0dPC9YbA" target="_blank" title="">Request an Invite<i class="flaticon-trajectory"></i><span></span></a>

           </li>
         -->
        </ul>
      </nav>
    </div>

</div>

<main class="w-full fixed bg-white z-40 {scrolled?'flex':'hidden'}" >
  <div class="flex sm:hidden" >        
    <img src="/img/2026/btlogo_2026.svg" alt="Logo" class="object-contain h-12 px-2">
    <button on:click="{()=> menu_open = !menu_open }" class="z-50 cursor-pointer fixed right-5 w-10 h-10 text-xl ml-auto transition duration-150 hover:shadow leading-none px-2 py-1  rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
      <span class="block absolute w-6 h-0.5 rounded-sm bg-black top-3 duration-500 { menu_open ? 'opacity-0':'' }" ></span>
      <span class="block absolute w-6 h-0.5 rounded-sm bg-black duration-500 { menu_open ? 'transform rotate-45':'' }"></span>
      <span class="block absolute w-6 h-0.5 rounded-sm bg-black duration-500 { menu_open ? 'transform -rotate-45':'' }"></span>
      <span class="block absolute w-6 h-0.5 rounded-sm bg-black bottom-2.5 duration-500 { menu_open ? 'opacity-0':'' }"></span>
    </button>
  </div>
</main>

