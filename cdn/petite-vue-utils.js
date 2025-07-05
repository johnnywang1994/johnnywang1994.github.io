((global) => {
  const petiteVueUtils = {
    scriptId: 'petite-vue-script',
    body: document.documentElement || document.body,

    pluginCSS: '',
    setPluginCSS: (css) => {
      petiteVueUtils.pluginCSS = css;
    },

    setup: (callback) => {
      const script = document.getElementById(petiteVueUtils.scriptId);
      if (!script) {
        const style = document.createElement('style');
        style.textContent = petiteVueUtils.pluginCSS;
        document.head.appendChild(style);
        const script = document.createElement('script');
        script.id = petiteVueUtils.scriptId;
        script.src = 'https://unpkg.com/petite-vue';
        script.onload = callback;
        document.head.appendChild(script);
      } else {
        callback();
      }
    },

    createRootElement: (id) => {
      const rootElement = document.createElement('div');
      /* use innerHTML to prevent @vue attribute invalid error */
      rootElement.innerHTML = /*html*/`
        <div
          id="${id}"
          v-scope="App()"
          @vue:mounted="mounted"
          @vue:unmounted="unmounted"
        ></div>
      `;
      return rootElement;
    },

    createRoot(App) {
      const app = PetiteVue.createApp({ App });
      return {
        mount: (rootId) => {
          const rootElement = petiteVueUtils.createRootElement(rootId);
          petiteVueUtils.body.appendChild(rootElement);
          app.mount(rootElement.querySelector(`#${rootId}`));
          return app;
        }
      }
    }
  }

  global.petiteVueUtils = petiteVueUtils;
})(window);
