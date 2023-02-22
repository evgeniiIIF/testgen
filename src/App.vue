<template>
  <div class="v-app">
    <div class="v-app__dropdown">

      <v-dropdown
        :items="dropdownItems"
        @on-selected-item="onSelectedItem($event)">
      </v-dropdown>
    </div>
    <button class="v-app__button"
      :disabled="!hasSelected"
      @click="createEntity">
      <span v-if="!loading">Создать</span>
      <span v-else class="loading"></span>
    </button>
    <table class="v-app__table">
      <thead>
        <tr>
          <th>Сущность</th>
          <th>id</th>
        </tr>
      </thead>
      <tr v-for="item in createdEntities" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.id }}</td>
      </tr>
      <tr></tr>
    </table>
    <button class="v-app__button"
      :disabled="!createdEntities.length"
      @click="clearEntities">
      <span>Очистить</span>
    </button>
  </div>
</template>
<script>
import vDropdown from './components/vDropdown.vue'

import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  components: {
    vDropdown
  },
  data() {
    return {
      dropdownItems: ['Не выбрано', 'Сделка', 'Контакт', 'Компания'],
      hasSelected: false,
      entity: null,
    }
  },
  methods: {
    ...mapActions(['aCreateEntity', 'aInit', 'aClearEntities']),
    onSelectedItem(e) {
      this.hasSelected = e.hasSelected
      this.entity = e.selected
    },
    createEntity() {
      this.aCreateEntity(this.entity)
    },
    clearEntities() {
      this.aClearEntities()
    }
  },
  computed: {
    ...mapGetters(['loading', 'createdEntities']),
  },
  mounted() {
    this.aInit()
  },

}
</script>
<style lang="scss">
.v-app {
  width: 90%;
  border: 1px solid #b8b6b6;
  border-radius: 4px;
  margin: 0 auto;
  padding: 20px 30px;

  &>* {
    margin-bottom: 30px;
  }

  &__dropdown {}

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 35px;
    cursor: pointer;
    border-radius: 4px;
    border: none;
    background: #26b6f8;
    color: #fff;

    &:disabled {
      background: #eee;
      color: #cecece;
      cursor: not-allowed;
    }
  }

  &__table {
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      padding: 10px 20px;
      width: 50%;
      border: 1px solid #b8b6b6;
      text-align: center;
      color: #5c5c5c;
    }
  }
}

.loading {
  display: inline-block;
  width: 17px;
  height: 17px;
  border: 4px solid #fff;
  border-radius: 50%;
  border-left-color: #26b6f8;
  animation: load 1.5s linear infinite;
}

@keyframes load {
  to {
    transform: rotate(360deg);
  }
}
</style>
