 <template>
  <div>
    <v-list class="px-1 py-3 text-left" v-for="filter in filters" :key=filter.name>
      <strong class="px-2">{{filter.name}}</strong>
      <template v-for="(selection, index) in filter.selections">
        <v-list-item
          :key=index
        >
          <v-list-item-content>
            <v-list-item-title class="caption">
              {{ selection.name }} ({{ selection.count }})
            </v-list-item-title>
            <v-list-item-subtitle>
              <v-progress-linear
                color="blue darken-2"
                height="3"
                :value=calcPercentage(selection.count)
                class="pa-0 ma-0"
              ></v-progress-linear>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script>

export default {
  name: 'Selection',
  props: {
    groups: Array,
    total: Number
  },
  data () {
    return {}
  },
  computed: {
    filters () {
      let filters = []
      this.groups.forEach(filter => {
        let sortKey = filter.sort || 'count'
        let sortFn = (filter.order === 'asc') 
          ? (a, b) => a[sortKey] - b[sortKey]
          : (a, b) => b[sortKey] - a[sortKey]

        filter.selections = this.getHistogram(filter.selections).sort(sortFn)
        filters = filters.concat(filter)
      })
      return filters
    }
  },
  methods: {
    calcPercentage (count) {
      return count / this.total * 100
    }, 
    getHistogram (array) {
      let histogram = {}
      for(let item of array) {
        if (histogram[item]) {
          histogram[item] += 1
        } else {
          histogram[item] = 1
        }
      }
      return Object.keys(histogram).map(k => { return {name: k, count: histogram[k]} })
    }
  }
}
</script>