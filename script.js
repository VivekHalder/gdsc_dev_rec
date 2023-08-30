const conferenceList = document.getElementById('conference-list');

fetch('https://gdscdev.vercel.app/api')
  .then(response => response.json())
  .then(data => {
    const conferences = data.content.data;

    conferences.forEach(conference => {
      const conferenceCard = document.createElement('div');
      conferenceCard.classList.add('conference-card');

      const bannerImage = document.createElement('img');
      bannerImage.src = conference.banner_image;
      bannerImage.alt = conference.title;
      conferenceCard.appendChild(bannerImage);

      const title = document.createElement('h2');
      title.textContent = conference.title;
      conferenceCard.appendChild(title);

      const description = document.createElement('p');
      description.textContent = conference.description;
      conferenceCard.appendChild(description);

      const date = document.createElement('p');
      date.textContent = `Date: ${conference.date_time}`;
      conferenceCard.appendChild(date);

      const organizer = document.createElement('p');
      organizer.textContent = `Organizer: ${conference.organiser_name}`;
      conferenceCard.appendChild(organizer);

      const venue = document.createElement('p');
      venue.textContent = `Venue: ${conference.venue_name}, ${conference.venue_city}, ${conference.venue_country}`;
      conferenceCard.appendChild(venue);

      conferenceList.appendChild(conferenceCard);
    });
  })
  .catch(error => console.error('Error fetching data:', error));