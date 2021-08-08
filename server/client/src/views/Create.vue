<template lang="pug">
div
  h1 新規登録画面
  p: router-link(to='/') ホーム画面へ戻る
  input(type='text', v-model='postData.title')
  button(@click='postTodo') 追加
  p {{ postData.title }}
  p
    | In order to provide comfortable use for the customers, Yoku Moku official on-line shopping site uses SSL (Secure Socket Layer), a standard encryption protocol in internet, to secure advanced security for all communication contents, including credit card information.
    br
    | By clicking “trust-seal”, you will be able to confirm our verification result.
  p
    | Yoku Moku Inc. (hereinafter referred to as the “Company”) recognizes the importance of customers’ personal information, and treats them with extreme care to enhance protection of privacy.
    br
    | We hereby provide and publicize a guideline of appropriate protection and use of personal information (hereinafter, the “Privacy Policy”) based on the Law of Protecting Personal Information.
</template>

<script>
import Methods from '../api/methods';
export default {
  data() {
    return {
      postData: {
        title: '',
        done: false,
      },
    };
  },
  methods: {
    postTodo() {
      Methods.postTodo(this.postData);
      this.postData.title = '';
    },
  },
};
</script>
