<template>
    <div class = "items">
        <h4 v-on:click.prevent="changeOrganization(org.Org.id)">{{org.Org.org_name}}</h4>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'MyOrganizations',
    props: ['org'],
    methods :{
        changeOrganization(id){

            localStorage.setItem('idOrg' , id)
            this.$emit('checkPage')
            this.$emit('checkPage')
        }
    }
}
</script>

<style>

</style>