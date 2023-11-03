<template>
  <table >
    <thead >
    <tr  style="">
      <th  style="background-color: #2996EA;color: white"></th>
      <th  style="background-color: #2996EA;color: white">Hosted-Redirect</th>
      <th  style="background-color: #2996EA;color: white">Hosted-JS-SDK</th>
      <th  style="background-color: #2996EA;color: white">Non-Hosted</th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="item in tableData":key="item.id">
       <td  style="border: 1.2px solid #2996EA;">{{ item.column1 }}</td>
       <td  style="border: 1.2px solid #2996EA;">{{ item.column2 }}</td>
       <td  style="border:1.2px solid #2996EA;">{{ item.column3 }}</td>
        <td  style="border: 1.2px solid #2996EA;">{{ item.column4 }}</td>
      </tr>
    </tbody>
  </table>
</template>



<script>
export default {
  data() {
    return {
      tableData: [
        { column1: 'Complexity', column2: 'easy', column3: 'Moderate',column4: 'Complex' },
        { column1: 'Page Customization Level', column2: 'Low', column3: 'Medium',column4: 'High' },
        { column1: 'Mobile Compatibility', column2: 'Responsive Page', column3: 'Responsive Page',column4: 'Responsive Page && Native Page' },
        { column1: 'Redirect required', column2: 'YES', column3: 'NO',column4: 'NO' },
        { column1: 'PCI required', column2: 'NO', column3: 'NO',column4: 'Credit card payment required, APM not required' },
      ]
    };
  }
}
</script>

