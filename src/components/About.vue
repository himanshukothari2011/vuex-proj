<template>
<div class="about">
<h1>This is about Page Component </h1>
</div>
</template>
<script>
import { mapGetters } from "vuex"

export default{
     name:'About',
    computed:mapGetters['aboutData']
}
</script>