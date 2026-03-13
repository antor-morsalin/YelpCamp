document.getElementById('newCampForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    let title = document.getElementById('title');
    let title_error = document.getElementById('title_error');
    if (title.value.trim() === '') {
      valid = false;
      title_error.classList.remove('hidden');
      title.classList.add('border-red-500')
    } else {
      title_error.classList.add('hidden');
      title.classList.remove('border-red-500')
      title.classList.add('border-green-500')
    }

    let price = document.getElementById('price');
    let price_error = document.getElementById('price_error');
    if (price.value.trim() === '') {
      valid = false;
      price_error.classList.remove('hidden');
      price.classList.add('border-red-500')
    } else {
      price_error.classList.add('hidden');
      price.classList.remove('border-red-500')
      price.classList.add('border-green-500')
    }



    let location = document.getElementById('location');
    let location_error = document.getElementById('location_error');
    if (location.value.trim() === '') {
      valid = false;
      location_error.classList.remove('hidden');
      location.classList.add('border-red-500')
    } else {
      location_error.classList.add('hidden');
      location.classList.remove('border-red-500')
      location.classList.add('border-green-500')
    }


    let description = document.getElementById('description');
    let description_error = document.getElementById('description_error');
    if (description.value.trim().length < 10) {
      valid = false;
      description_error.classList.remove('hidden');
      description.classList.add('border-red-500')
    } else {
      description_error.classList.add('hidden');
      description.classList.remove('border-red-500')
      description.classList.add('border-green-500')
    }


    if (valid) {
      this.submit();
    }

  })