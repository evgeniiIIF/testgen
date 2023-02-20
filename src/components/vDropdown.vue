<template>
  <div class="v-dropdown" :class="menuIsOpen ? 'v-dropdown--menu-open' : ''">
    <label class="v-dropdown__label">
      <span class="v-dropdown__title">title</span>
      <div class="v-dropdown__field" @click="menuIsOpen = !menuIsOpen">
        <input type="text" class="v-dropdown__input" readonly :value="selected">
        <span class="v-dropdown__arrow">&#8964;</span>
      </div>
    </label>
    <ul class="v-dropdown__menu menu-dropdown" v-show="menuIsOpen">
      <li class="menu-dropdown__item"
        v-for="(item, index) in items" :key="index"
        @click="selectItem($event, item)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      menuIsOpen: false,
      selected: null,
    }
  },
  methods: {
    selectItem(e, item) {
      this.selected = item
      const input = e.target.closest('.v-dropdown').querySelector('.v-dropdown__input')
      this.menuIsOpen = false
      input.focus()
      this.$emit('on-selected-item', {
        hasSelected: this.hasSelected,
        selected: this.selected
      })
    },
    hideOptions(e) {
      if (this.menuIsOpen && !e.target.closest('.v-dropdown')) {
        this.menuIsOpen = false
      }
    }
  },
  computed: {
    hasSelected() {
      return this.selected !== this.items[0]
    }
  },
  mounted() {
    this.selected = this.items[0]
    document.addEventListener('click', this.hideOptions.bind(this), true)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideOptions)
  }
}
</script>

<style lang="scss">
.v-dropdown {
  position: relative;

  &__label {
    display: flex;
    flex-direction: column;
  }

  &__title {
    margin-bottom: 4px;
  }

  &__field {
    position: relative;
  }

  &__input {
    width: 100%;
    cursor: pointer;
    padding: 10px 25px 10px 15px;
    box-sizing: border-box;
    border: 1px solid #b8b6b6;
    border-radius: 4px;
    color: #b8b6b6;

    &:focus {
      outline: none;
      border-color: #5c5c5c;
      color: #5c5c5c;
    }
  }

  &__arrow {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(0%, -70%);
    transition: all .3s;

  }

  &__menu {
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    border: 1px solid rgb(92, 92, 92);
    border-top: none;
    border-radius: 0 0 4px 4px;
    background: #fff;
  }
}

.v-dropdown--menu-open {
  .v-dropdown__input {
    border-radius: 4px 4px 0 0;
    border-color: #5c5c5c;

  }

  .v-dropdown__arrow {
    transform: translate(0%, -30%) rotate(180deg);
    transition: all .3s;
  }
}

.menu-dropdown {

  &__item {
    padding: 10px 15px;
    cursor: pointer;

    &:hover {
      background: #eee;
    }
  }
}
</style>