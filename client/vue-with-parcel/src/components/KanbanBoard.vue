<template>
  <div>
      <div class="col col-xl-2 border border-primary m-2 p-3">
          <h1>{{status.name}}</h1>
           <KanbanCard :todo="todo"></KanbanCard>
    </div>
</template>

<script>
import KanbanCard from './KanbanCard'

export default {
    name: "KanbanBoard",
    components:{
        KanbanCard
    },
    props:["todo","status","kondisi"]
}
</script>

<style>

</style>