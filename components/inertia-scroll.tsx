import React, { useLayoutEffect } from 'react';
import $ from 'jquery';

export function IntertiaScrollBox() {
  useLayoutEffect(() => {
    if ($) {
        $(".box").inertiaScroll({
          parent: "",
          childDelta1: 0.02,
          childDelta2: 0.1,
          parentDelta: 0.08,
        });
      }
  }, []);

  return <div className="box">This is the box with inertiaScroll</div>;
}
