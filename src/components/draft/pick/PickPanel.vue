<script>

import PickList from './PickList.vue'
import PickRatings from './PickRatings.vue'

import jquery from 'jquery'

export default {
  name: 'PickPanel',
  components: {
    PickList, PickRatings
  },
  props: {
    picks: {
      type: Object,
      required: true
    },
    pick_ratings: {
      type: Array,
      default: null
    }
  },
  methods: {
    onPickDragged(data) {
      if (data) {
        jquery('#deck-tab').tab('show');
        if (!data.onAfterDrop) {
          data.onAfterDrop = function() {
            jquery('#pick-ratings-tab').tab('show');
          };
        }
      }
    }
  }
}

</script>

<template>
  <div class="pick-panel card bg-white">
    <div class="card-header tabs-header">
      <ul 
        class="nav" 
        role="tablist"
      >
        <li class="nav-item">
          <a 
            id="deck-tab" 
            class="nav-link active" 
            data-toggle="tab" 
            href="#deck" 
            role="tab" 
            aria-controls="deck" 
            aria-selected="true"
          >
            Picks
          </a>
        </li>
        <li 
          v-if="pick_ratings" 
          class="nav-item"
        >
          <a 
            id="pick-ratings-tab" 
            class="nav-link" 
            data-toggle="tab" 
            href="#pick-ratings"
            role="tab" 
            aria-controls="pick-ratings" 
            aria-selected="false"
          >
            Ratings
          </a>
        </li>
      </ul>
    </div>

    <div class="card-body tab-content">
      <div 
        id="deck" 
        class="tab-pane fade show active" 
        role="tabpanel" 
        aria-labelledby="deck-tab"
      >
        <PickList :piles="picks.piles" />
      </div>
      <div 
        v-if="pick_ratings" 
        id="pick-ratings" 
        class="tab-pane fade" 
        role="tabpanel" 
        aria-labelledby="pick-ratings-tab"
      >
        <PickRatings 
          :pick_ratings="pick_ratings" 
          @pick-dragged="onPickDragged"
        />
      </div>
    </div>
  </div>
</template>

<style>

.pick-panel .card-body {
  position: relative;
  overflow-y: scroll;
}

</style>

