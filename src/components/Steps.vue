<template>
    <ul class="steps is-horizontal">
        <li class="steps-segment">
            <a href="#" class="steps-marker">
                <span class="icon">
                    <i class="fa fa-check"></i>
                </span>
            </a>
        </li>
        <li class="steps-segment">
            <a href="#" class="steps-marker">
                <span class="icon">
                    <i class="fa fa-check"></i>
                </span>                
            </a>
        </li>
        <li class="steps-segment is-active has-gaps">
            <span class="steps-marker">
                <i class="fas fa-shopping-cart"></i>
            </span>
        </li>
        <li class="steps-segment">
            <span class="steps-marker is-hollow">
                <i class="fas fa-euro-sign"></i>
            </span>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Steps'
}
</script>

<style>
    .fas{
        margin-left: -2px !important;
    }
    .fa-euro-sign {
        color: #DBDBDB
    }
</style>