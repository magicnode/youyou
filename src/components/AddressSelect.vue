<template>
    <select v-model="selected" lazy>
        <option v-for="option in options" v-bind:value="option.value">
            {{ option.text }}
        </option>
    </select>
</template>
<script>
export default {
  name: 'Addrselect',
  props: {
    initselectedvalue: {
      type: Number,
      default: 1
    },
    addrs: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      selected: this.initselectedvalue,
      options: [{
        'text': '请选择..',
        'value': '0'
      }].concat(this.addrs)
    }
  },
  watch: {
    addrs: function (val, oldVal) {
      if (val !== oldVal) {
        this.options = [{
          'text': '请选择..',
          'value': '0'
        }].concat(val)
        this.selected = 0
      }
    }
  }
}
</script>
