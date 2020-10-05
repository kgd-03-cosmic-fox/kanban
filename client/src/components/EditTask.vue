<template>
  <div id="test-add">
    <form>
      <h3>Edit Task</h3>
      <table>
        <tr>
          <td><label for="title">Title</label></td>
          <td><input type="text" placeholder="Title"></td>
        </tr>
        <tr>
          <td><label for="description">description</label></td>
          <td><input  type="text" placeholder="Description"></td>
        </tr>
        <tr>
          <td><label for="category">Category</label></td>
          <td>
          <select>
            <option value="Backlog">Backlog</option>
            <option value="Progress">Progress</option>
            <option value="Strugle">Strugle</option>
            <option value="Done">Done</option>
          </select>
          </td>
        </tr>
        <tr>
          <td>Date</td>
          <td><input type="date" v-model="task.due_date"><br></td>
        </tr>
        <tr>
          <td><button>Save</button></td>
          <td><button>Back</button></td>
        </tr>
      </table>
  </form>
  </div>
</template>
<script>
 import axios from'axios'
  export default{
    name:'EditTask'
}
</script>
