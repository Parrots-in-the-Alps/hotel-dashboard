<template>
    <a-table :columns="columns" :data-source="dataSource" bordered />
 
  </template>
  <script>
  export default {
  name: "AvailableRoom",
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
   this.$dataStore.opsdata.availableRooms.forEach(room => {

    this.dataSource.push({ //call api puis bouclé sur response
        num: room.number,
        type: room.type,
        liberee_le: room.occupiedOn ? room.occupiedOn : 'libre',
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