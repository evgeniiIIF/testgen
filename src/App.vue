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
        <td>{{ item.entity }}</td>
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
      createdEntities: [],
      id: 0,
    }
  },
  methods: {
    ...mapActions(['aCreateEntity']),
    onSelectedItem(e) {
      this.hasSelected = e.hasSelected
      this.entity = e.selected
    },
    createEntity() {
      this.aCreateEntity()
      setTimeout(() => {
        this.createdEntities.push({
          entity: this.entity,
          id: ++this.id
        })
        this.saveEntity()
      }, 1000)
    },
    saveEntity() {
      let entities = JSON.stringify(this.createdEntities)
      localStorage.setItem('entities', entities)
    },
    clearEntities() {
      this.createdEntities = []
      localStorage.removeItem('entities')
    }
  },
  computed: {
    ...mapGetters(['loading']),
  },
  mounted() {
    if (localStorage.getItem('entities')) {
      this.createdEntities = JSON.parse(localStorage.getItem('entities'));
    }
  },

}
</script>
<style lang="scss">
.v-app {
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
      color: rgb(206, 206, 206);
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
      border: 1px solid #000;
      text-align: center;
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
