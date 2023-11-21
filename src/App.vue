<template>
  <el-dialog v-model="openDialog" title="Tips" width="30%" :before-close="handleClose">
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="openDialog = false">Cancel</el-button>
        <el-button type="primary" @click="handleClose"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>

  <el-row>
    <el-col :span="24">
      <div class="grid-content ep-bg-purple-dark">
        <CustomButton @click="openDialog = true"> Custom Button </CustomButton>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ElMessageBox } from 'element-plus'
import { ref } from 'vue'
import CustomButton from './components/CustomButton.vue'

const openDialog = ref(false)

const handleClose = () => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      openDialog.value = false
    })
    .catch(() => {
      // catch error
    })
}
</script>
