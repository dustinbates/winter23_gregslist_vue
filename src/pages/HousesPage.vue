<template>
  <div class="housesPage">

    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="h in houses">
          <HouseCard :house="h" />
        </div>
      </div>
      <div class="row sticky-bottom" v-if="account.id">
        <div class="col-12 text-end ">
          <button class="fs-5 btn btn-dark mb-2"
          data-bs-toggle="modal"
          data-bs-target="#test-modal">
          🏠
          </button>
        </div>
      </div>
    </div>
  </div>

  <Modal id="test-modal" modal-title="Add a House 🏠">
    <HouseForm />
  </Modal>
</template>


<script>
import { onMounted, computed } from 'vue';
import { AppState } from '../AppState.js';
import { housesService } from '../services/HousesService.js'
import Pop from '../utils/Pop.js';

export default {
  setup(){
    async function getHouses(){
      try {
        await housesService.getHouses()
      } catch (error) {
        Pop.error(error, 'Getting Houses')
      }
    }

    onMounted(() => {
      getHouses()
    })
    return {
      account: computed(() => AppState.account),
      houses: computed(() => AppState.houses),
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
