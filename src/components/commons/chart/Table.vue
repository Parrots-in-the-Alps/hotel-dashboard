<template>
    <a-table :columns="columns" :data-source="dataSource" bordered />
 
  </template>
  <script>
  export default {
  name: "Table",
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      columns: [
        {
          title: 'num',
          dataIndex: 'num',
          width: '5%',
        },
        {
          title: 'type',
          dataIndex: 'type',
          width: '25%',
        },
        {
          title: 'client',
          dataIndex: 'client',
          width: '35%',
        },
        {
          title: this.type === 'occupied' ? 'Occupée le' : 'Libérée le',
          dataIndex: 'liberee_le',
          width: '35%',
        }
      ],
      dataSource: [],
      editableData: {},
    };
  },
  created() {
    for (let i = 0; i < 100; i++) {
      this.dataSource.push({ //call api puis bouclé sur response
        key: i.toString(),
        num: i.toString(),
        type: `Standard`,
        client: `Edrward ${i}`,
        liberee_le: this.type === 'occupied' ? '06/08/2023' : '14/11/2023',
      });
    }
  }
};

  </script>
  <style scoped>
  .editable-row-operations a {
    margin-right: 8px;
  }
  </style>