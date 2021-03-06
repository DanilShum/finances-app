<template>
  <div
    class="base-table"
    ref="table"
    :class="{ 'base-table_width-pagination': !disabledPagination }"
  >
    <v-toolbar class="base-table__header" flat :height="48" :max-height="48">
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      />
      <slot v-if="showActions" name="header-actions">
        <v-btn color="primary" dark class="ml-4" @click="$emit('add')">
          Добавить актив
        </v-btn>
      </slot>
    </v-toolbar>
    <v-data-table
      :loading="loading"
      loading-text="Loading... Please wait"
      :headers="headers"
      :items="row"
      :page.sync="page"
      :disable-pagination="disabledPagination"
      :items-per-page="itemsPerPage"
      :search="search"
      fixed-header
      hide-default-footer
      class="base-table__table elevation-1"
      @page-count="pageCount = $event"
    >
      <template #item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-if="!disabledPagination" #footer>
        <div class="text-center base-table__pagination">
          <v-pagination v-model="page" :length="pageCount"></v-pagination>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "BaseTable",
  components: {},
  props: {
    disabledPagination: {
      type: Boolean,
      default: false,
    },
    row: {
      type: Array,
      required: true,
    },
    headers: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    showActions: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    page: 1,
    pageCount: 0,
    singleSelect: false,
    selected: [],
    search: "",
    tableHeight: 0,
  }),
  computed: {
    itemsPerPage() {
      return Math.floor(this.tableHeight / 48) - 3;
    },
  },
  mounted() {
    this.tableHeight = this.$refs.table.clientHeight;
  },

  watch: {},
  methods: {
    editItem() {},

    deleteItem() {},

    deleteItemConfirm() {},

    close() {},

    closeDelete() {},

    save() {},
  },
};
</script>

<style lang="scss">
.base-table {
  width: 100%;
  height: 100%;
  border-left: 1px solid rgba(black, 0.12);

  &:not(.base-table_width-pagination) .v-data-table__wrapper {
    height: 100%;
    border-bottom: 1px solid rgba(black, 0.12);
  }
}
.base-table__table {
  height: calc(100% - 48px);
  overflow: auto;
}
.base-table_width-pagination {
  .v-data-table__wrapper {
    margin-bottom: auto;
  }
  .v-data-table {
    display: flex;
    flex-direction: column;
  }
}
.base-table__pagination {
  padding: 10px 0;
}
</style>
