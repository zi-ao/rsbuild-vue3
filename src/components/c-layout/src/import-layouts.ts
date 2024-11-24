import LayoutError from './LayoutError.vue';
import LayoutLoading from './LayoutLoading.vue';

const layoutContext = import.meta.webpackContext('/src/layouts', {
  mode: 'lazy',
  recursive: true,
  regExp: /Layout\.(vue|tsx)$/,
});

const layoutComponents: Record<string, Component> = {};

for (const layoutPath of layoutContext.keys()) {
  const layoutName = layoutPath
    .substring(2, layoutPath.length - 4)
    .replace(/([A-Za-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
  layoutComponents[layoutName] = defineAsyncComponent({
    loader: () => layoutContext(layoutPath) as Promise<{ default: Component }>,
    loadingComponent: LayoutLoading,
    errorComponent: LayoutError,
  });
}

export default layoutComponents;
