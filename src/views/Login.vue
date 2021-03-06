<template>
  <validate-form @form-submit="submitForm">
    <div class="mb-3">
      <label class="form-label">邮箱地址</label>
      <validate-input
        type="text"
        :rules="emailRules"
        class="form-input"
        placeholder="请输入邮箱地址"
        v-model="emailRef"
      ></validate-input>
    </div>
    <div class="mb-3">
      <label class="form-label">密码</label>
      <validate-input
        type="password"
        placeholder="请输入密码"
        class="form-password"
        :rules="passwordRules"
        v-model="passwordRef"
      />
    </div>
    <template #submit>
      <button type="submit" class="btn btn-danger">提交</button>
    </template>
  </validate-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import 'bootstrap/dist/css/bootstrap.min.css'

import ValidateForm from '../components/ValidateForm.vue'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
import { GlobalDataProps } from '../store'

const emailRules: RulesProp[] = [
  { type: 'required', message: '电子邮箱地址不能为空' },
  { type: 'email', message: '请输入正确的电子邮箱格式' },
]

const passwordRules: RulesProp[] = [
  { type: 'required', message: '密码不能为空' },
]

export default defineComponent({
  name: 'Login',
  components: {
    ValidateInput,
    ValidateForm,
  },
  setup() {
    const emailRef = ref<any>('123@01.com')
    const passwordRef = ref<any>('123')
    const router = useRouter()
    const store = useStore<GlobalDataProps>()

    const submitForm = (result: boolean) => {
      console.log('result', result)
      if (result) {
        store.commit('login')
        router.push('/ColumnDetail/2')
      }
    }

    return {
      emailRules,
      passwordRules,
      submitForm,
      emailRef,
      passwordRef,
    }
  },
})
</script>

<style>
</style>
