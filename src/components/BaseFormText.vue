<template>
  <BaseFormField :title="title" :error="error">
    <input v-model="dataValue" class="form__input" type="text"
    :placeholder="placeholder">
  </BaseFormField>
</template>

<script>
import formFieildMixin from '@/mixins/formFieldMixin';

export default {
  mixins: [formFieildMixin],
};
</script>
