//when form is submitted grab user's input and log 🇮🇹

user_input_form.addEventLister("submit", (e) => {
    e.preventDefault();  // e is the event;
    // that object holds more information

    const destinationName = destination_name.value;
    const locationName = location_name.value;
    const photoUrl = photo_url.value || PLACEHOLDER_PHOTO_URL;
    const desc = description.value;

    user_input_form.reset();  // reset the form
    // need
    console.log(destinationName, locationName, photoUrl, descr);
    });