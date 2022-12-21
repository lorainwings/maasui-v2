import { defineComponent, ref, reactive, onBeforeMount } from "vue";

export default defineComponent({
  name: "MTimer",
  // eslint-disable-next-line no-unused-vars
  setup(props) {
    let count = ref(0);
    const state = reactive({ count: 0 });

    onBeforeMount(() => {
      const t = setInterval(() => {
        count.value++;
        state.count += 2;
        if (count.value === 10) clearInterval(t);
      }, 1000);
    });

    return () => (
      <div>
        MTimer:
        {count} / {state.count}
      </div>
    );
  },
});
