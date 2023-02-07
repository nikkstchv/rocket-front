<template>
  <a-card style="width: 90vw">
    <template #extra>
      <a-input-search
        v-model:value="inputValue"
        placeholder="Поиск сделок"
        style="width: 300px"
        @search="onSearch"
      />
    </template>
    <a-table :columns="columns" :data-source="data">
      <template #expandedRowRender="{ record }">
        <p style="margin: 0">
          {{ record.budget }}
        </p>
      </template>
    </a-table>
  </a-card>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTableStore } from "@/stores/tableStore";

const { data, inputValue, isLoading } = storeToRefs(useTableStore());

const columns = [
  { title: "Название", dataIndex: "name", key: "name" },
  { title: "Статус", dataIndex: "status", key: "status" },
  { title: "Дата создания", dataIndex: "createdAt", key: "createdAt" },
  { title: "Бюджет", dataIndex: "budget", key: "budget" },
];

const onSearch = (searchValue: string) => {
  console.log("use value");
};
</script>

<style scoped>

</style>
