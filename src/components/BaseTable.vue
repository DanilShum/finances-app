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
      class="base-table__table"
      :class="{ 'base-table__table_editable': editable }"
      @page-count="pageCount = $event"
    >
      <template #item.actions="{ item }">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-icon v-on="on">mdi-dots-horizontal</v-icon>
          </template>
          <v-list>
            <v-list-item v-for="(action, index) in actions" :key="index" link>
              <v-list-item-title @click="$emit(action.action, item)">
                <v-icon small v-text="action.icon" class="mr-2" />
                {{ action.text }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
      <template v-if="!disabledPagination" #footer>
        <div class="text-center base-table__pagination">
          <v-pagination v-model="page" :length="pageCount"></v-pagination>
        </div>
      </template>
    </v-data-table>
    <v-btn
      v-if="showActions"
      fab
      dark
      color="primary"
      class="base-table__create-button ml-4 mx-2"
      @click="$emit('add')"
    >
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>
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
    editable: {
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
    actions: [
      { text: "Изменить", icon: "mdi-pencil", action: "edit" },
      {
        text: "Повторить",
        icon: "mdi-plus-circle-multiple-outline",
        action: "clone",
      },
      { text: "Удалить", icon: "mdi-delete", action: "remove" },
    ],
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
  border-bottom: 1px solid rgba(black, 0.12);

  &:not(.base-table_width-pagination) .v-data-table__wrapper {
    height: 100%;
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
.base-table_action-cell {
  width: 0;
  padding: 0 !important;
  right: 0;
  transform: translateZ(0);
}
.base-table__table_editable {
  tbody {
    tr:hover {
      .text-start:last-child {
        opacity: 1;
      }
    }
    .text-start:last-child {
      width: 40px;
      max-width: 40px;
      padding: 5px;
      position: absolute;
      right: 0;
      transform: translateZ(0);
      border: none !important;
      display: flex;
      align-items: center;
      opacity: 0;
    }
  }
}
.base-table__create-button {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
</style>
