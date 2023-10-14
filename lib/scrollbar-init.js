import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar";

class DisableScrollPlugin extends ScrollbarPlugin {
  static pluginName = "disableScroll";

  static defaultOptions = {
    direction: "",
  };

  transformDelta(delta) {
    if (this.options.direction) {
      delta[this.options.direction] = 0;
    }

    return { ...delta };
  }
}

export function initializeSmoothScrollbar() {
  const options = {
    damping: 0.1,
    thumbMinSize: 20,
    plugins: {
      disableScroll: {
        direction: "x",
      },
    },
  };

  Scrollbar.use(DisableScrollPlugin);

  const scrollbar = Scrollbar.init(
    document.querySelector("#my-scrollbar"),
    options
  );

  scrollbar.track.xAxis.element.remove();

  return scrollbar;
}
