<template>
    <a-table :columns="columns" :data-source="dataSource" bordered />
 
  </template>
  <script>
  export default {
  name: "OccupiedRooms",
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
          title: this.type === 'occupied' ? 'Libérée le' : 'Occupée le',
          dataIndex: 'liberee_le',
          width: '35%',
        }
      ],
      dataSource: [],
      editableData: {},
    };
  },
  created() {
   this.$dataStore.opsdata.occupiedRooms.forEach(room => {

    this.dataSource.push({ //call api puis bouclé sur response
        num: room.number,
        type: room.type,
        client: room.client,
        liberee_le: room.freeOn,
      });
   });
      
    }
  
};

  </script>
  <style scoped>
  .editable-row-operations a {
    margin-right: 8px;
  }
  </style>