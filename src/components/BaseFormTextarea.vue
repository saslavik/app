<template>
  <BaseFormField :title="title" :error="error">
    <textarea v-model="dataValue" class="form__input form__input--area"
    :placeholder="placeholder"></textarea>
  </BaseFormField>
</template>

<script>
import formFieildMixin from '@/mixins/formFieldMixin';

export default {
  mixins: [formFieildMixin],
};
</script>
