<script lang="ts" setup>
import { ElMessageBox } from 'element-plus'
import { ref } from 'vue'

const openDialog = ref(false)

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>

<template>
  <el-dialog v-model="openDialog" title="Tips" width="30%" :before-close="handleClose">
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="openDialog = false">Cancel</el-button>
        <el-button type="primary" @click="openDialog = false"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>

  <el-row>
    <el-col :span="24">
      <div class="grid-content ep-bg-purple-dark">
        <el-button @click="openDialog = true">teste</el-button>
      </div>
    </el-col>
  </el-row>
</template>
