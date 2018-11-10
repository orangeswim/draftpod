

import Vue from 'vue';
export const EventBus = new Vue();

export const Events = {
  ViewCard: 'mtgdraft-view-card',

  CardPackToPick: 'mtgdraft-card-pack-to-pick',
  CardPickToPile: 'mtgdraft-card-pick-to-pile',
  CardDeckToSideboard: 'mtgdraft-card-deck-to-sideboard',
  CardSideboardToDeck: 'mtgdraft-card-sideboard-to-deck',
  CardSideboardToSideboard: 'mtgdraft-card-sideboard-to-sideboard',

  LandsAutoDisable: 'mtgdraft-lands-auto-disable',
  LandsChanged: 'mtgdraft-lands-changed'
};
