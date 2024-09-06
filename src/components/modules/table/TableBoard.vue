<script setup>
import TableHistory from '@/components/modules/table/components/TableHistory.vue';
import TableCoupon from '@/components/modules/table/components/TableCoupon.vue';

</script>

<template>
  <div class="board">
    <TableHistory />
    <TableCoupon />
  </div>
</template>

<style lang="scss" scoped>
.board {
  position: relative;
  height: 370px;
}
</style>
