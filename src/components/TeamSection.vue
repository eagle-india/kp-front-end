<template>
  <section class="section-container d-flex flex-column" id="team-section">
    <div class="display-4">Our Team</div>
    <b-container style="height: 100%">
      <b-row
        style="height: 100%"
        class="justify-content-center align-items-center"
      >
        <b-col md="6" xl="4">
          <b-card
            title="Team Member"
            img-src="https://picsum.photos/600/300/?person"
            img-alt="Image"
            img-top
            tag="article"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">View Details</b-button>
          </b-card>
        </b-col>
        <b-col md="6" xl="4">
          <b-card
            title="Team Member"
            img-src="https://picsum.photos/600/300/?person=2"
            img-alt="Image"
            img-top
            tag="article"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">View Details</b-button>
          </b-card>
        </b-col>
        <b-col md="6" xl="4">
          <b-card
            title="Team Member"
            img-src="https://picsum.photos/600/300/?person=3"
            img-alt="Image"
            img-top
            tag="article"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">View Details</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
