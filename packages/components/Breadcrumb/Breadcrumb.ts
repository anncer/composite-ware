import { defineComponent, h, mergeProps } from 'vue'
import { useRoute } from 'vue-router'
import { breadcrumbProps, ElBreadcrumb, ElBreadcrumbItem } from 'element-plus'
import { CeLink } from '../link/index'

export default defineComponent({
  name: 'CeBreadcrumb',
  props: breadcrumbProps,
  setup(props) {
    const route = useRoute()

    return () =>
      h(ElBreadcrumb, mergeProps(props, { class: 'ce-breadcrumb' }), () =>
        route.matched.map((item) =>
          h(ElBreadcrumbItem, null, () =>
            h(CeLink, { to: item.path }, () => item.meta?.title)
          )
        )
      )
  },
})
