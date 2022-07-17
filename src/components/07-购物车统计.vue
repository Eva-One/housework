<template>
  <tfoot>
    <tr>
      <td>合计:</td>
      <td colspan="5">{{ numTotal }}</td>
    </tr>
  </tfoot>
</template>

<script>
export default {
  name: "goodsTotal",
  props: ["numTotal"],
};
</script>