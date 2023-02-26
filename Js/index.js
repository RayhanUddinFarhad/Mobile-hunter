const loadData = (id) => {

    const url = `https://openapi.programming-hero.com/api/phones?search=${id}`;

    fetch (url)
    .then (response => response.json())
    .then (data => showData(data.data.slice (0, 5)))

    



}

const showData = (phones) => {


    const container = document.getElementById('container');
    container.innerHTML = ''
    const warning = document.getElementById('warning-text');


    if (phones.length ===0) {

        warning.classList.remove('hidden')



     }

     else {

        warning.classList.add('hidden');


     }
     progress (false)

    


    phones.forEach(phone => {

        const div = document.createElement('div')

        div.innerHTML = `


        
        <div class="card p-10 bg-base-100 shadow-xl m-0 ">
        <figure><img src="${phone.image}"  /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <label onclick="getDetails('${phone.slug}')" for="my-modal-3" class="btn">Details</label>

          </div>
        </div>
      </div>
        
        
        
        `


        container.appendChild(div);

        progress (false)





    })
















 }

 document.getElementById ('search-btn').addEventListener ('click', function () {


    const input = document.getElementById ('search-input');
    const getKey = input.value;
    loadData (getKey);
    showAll (getKey);
    input.value = ''
    progress (true)



   











 })



 const getDetails = (getDetails2) => {

    const url = `https://openapi.programming-hero.com/api/phone/${getDetails2}`
    fetch (url)
    .then (response => response.json ())
    .then (data =>showDetails (data.data))



 }

 const showDetails = (Details) => {


    const phonename = document.getElementById ('phone-name')
    phonename.innerText = Details.name;

    const releasedate = document.getElementById ('release-date')

    releasedate.innerText = `

    ${Details.releaseDate ? Details.releaseDate : 'Release Date not available'}
    
    
    `

    const imageContainer =  document.getElementById ('image-container')
    imageContainer.innerHTML = `

    <figure><img src="${Details.image}"  /></figure>

    
    
    `

   




  }


  const showAll = (id) => {


    const url = `https://openapi.programming-hero.com/api/phones?search=${id}`;

    fetch (url)
    .then (response => response.json())
    .then (data => showData(data.data))



  }


  const progress = (isSpinner) => {
    const spinner = document.getElementById ('spinner')

    if (isSpinner) { 

        spinner.classList.remove ('hidden')



    }

    else {


        spinner.classList.add ('hidden')
    }



    
  }








 getDetails ()




loadData ('Iphone')
showAll ('Iphone')