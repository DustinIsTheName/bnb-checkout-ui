(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/@shopify/checkout-ui-extensions/build/esm/extend.mjs
  var extend;
  var init_extend = __esm({
    "node_modules/@shopify/checkout-ui-extensions/build/esm/extend.mjs"() {
      extend = (...args) => self.shopify.extend(...args);
    }
  });

  // node_modules/@remote-ui/core/build/esm/component.mjs
  function createRemoteComponent(componentType) {
    return componentType;
  }
  var init_component = __esm({
    "node_modules/@remote-ui/core/build/esm/component.mjs"() {
    }
  });

  // node_modules/@remote-ui/core/build/esm/index.mjs
  var init_esm = __esm({
    "node_modules/@remote-ui/core/build/esm/index.mjs"() {
      init_component();
    }
  });

  // node_modules/@remote-ui/core/index.mjs
  var init_core = __esm({
    "node_modules/@remote-ui/core/index.mjs"() {
      init_esm();
    }
  });

  // node_modules/@shopify/checkout-ui-extensions/build/esm/components/Banner/Banner.mjs
  var Banner;
  var init_Banner = __esm({
    "node_modules/@shopify/checkout-ui-extensions/build/esm/components/Banner/Banner.mjs"() {
      init_core();
      Banner = createRemoteComponent("Banner");
    }
  });

  // node_modules/@shopify/checkout-ui-extensions/build/esm/components/BlockStack/BlockStack.mjs
  var BlockStack;
  var init_BlockStack = __esm({
    "node_modules/@shopify/checkout-ui-extensions/build/esm/components/BlockStack/BlockStack.mjs"() {
      init_core();
      BlockStack = createRemoteComponent("BlockStack");
    }
  });

  // node_modules/@shopify/checkout-ui-extensions/build/esm/components/Button/Button.mjs
  var Button;
  var init_Button = __esm({
    "node_modules/@shopify/checkout-ui-extensions/build/esm/components/Button/Button.mjs"() {
      init_core();
      Button = createRemoteComponent("Button");
    }
  });

  // node_modules/@shopify/checkout-ui-extensions/build/esm/components/Divider/Divider.mjs
  var Divider;
  var init_Divider = __esm({
    "node_modules/@shopify/checkout-ui-extensions/build/esm/components/Divider/Divider.mjs"() {
      init_core();
      Divider = createRemoteComponent("Divider");
    }
  });

  // node_modules/@shopify/checkout-ui-extensions/build/esm/components/Heading/Heading.mjs
  var Heading;
  var init_Heading = __esm({
    "node_modules/@shopify/checkout-ui-extensions/build/esm/components/Heading/Heading.mjs"() {
      init_core();
      Heading = createRemoteComponent("Heading");
    }
  });

  // node_modules/@shopify/checkout-ui-extensions/build/esm/components/Image/Image.mjs
  var Image;
  var init_Image = __esm({
    "node_modules/@shopify/checkout-ui-extensions/build/esm/components/Image/Image.mjs"() {
      init_core();
      Image = createRemoteComponent("Image");
    }
  });

  // node_modules/@shopify/checkout-ui-extensions/build/esm/components/InlineLayout/InlineLayout.mjs
  var InlineLayout;
  var init_InlineLayout = __esm({
    "node_modules/@shopify/checkout-ui-extensions/build/esm/components/InlineLayout/InlineLayout.mjs"() {
      init_core();
      InlineLayout = createRemoteComponent("InlineLayout");
    }
  });

  // node_modules/@shopify/checkout-ui-extensions/build/esm/components/SkeletonImage/SkeletonImage.mjs
  var SkeletonImage;
  var init_SkeletonImage = __esm({
    "node_modules/@shopify/checkout-ui-extensions/build/esm/components/SkeletonImage/SkeletonImage.mjs"() {
      init_core();
      SkeletonImage = createRemoteComponent("SkeletonImage");
    }
  });

  // node_modules/@shopify/checkout-ui-extensions/build/esm/components/SkeletonText/SkeletonText.mjs
  var SkeletonText;
  var init_SkeletonText = __esm({
    "node_modules/@shopify/checkout-ui-extensions/build/esm/components/SkeletonText/SkeletonText.mjs"() {
      init_core();
      SkeletonText = createRemoteComponent("SkeletonText");
    }
  });

  // node_modules/@shopify/checkout-ui-extensions/build/esm/components/Text/Text.mjs
  var Text;
  var init_Text = __esm({
    "node_modules/@shopify/checkout-ui-extensions/build/esm/components/Text/Text.mjs"() {
      init_core();
      Text = createRemoteComponent("Text");
    }
  });

  // node_modules/@shopify/checkout-ui-extensions/build/esm/index.mjs
  var init_esm2 = __esm({
    "node_modules/@shopify/checkout-ui-extensions/build/esm/index.mjs"() {
      init_extend();
      init_Banner();
      init_BlockStack();
      init_Button();
      init_Divider();
      init_Heading();
      init_Image();
      init_InlineLayout();
      init_SkeletonImage();
      init_SkeletonText();
      init_Text();
    }
  });

  // node_modules/@shopify/checkout-ui-extensions/index.mjs
  var init_checkout_ui_extensions = __esm({
    "node_modules/@shopify/checkout-ui-extensions/index.mjs"() {
      init_esm2();
    }
  });

  // extensions/checkout-ui-extension/src/index.js
  var require_src = __commonJS({
    "extensions/checkout-ui-extension/src/index.js"(exports) {
      init_checkout_ui_extensions();
      setTimeout(function() {
        try {
          console.log("test", document);
        } catch (e) {
          console.log(e);
        }
      }, 5e3);
      extend(
        "Checkout::Dynamic::Render",
        (root, { lines, applyCartLinesChange, query, i18n }) => {
          let products = [];
          let loading = true;
          let appRendered = false;
          query(
            `query ($first: Int!) {
        products(first: $first) {
          nodes {
            id
            title
            images(first:1){
              nodes {
                url
              }
            }
            variants(first: 1) {
              nodes {
                id
                price {
                  amount
                }
              }
            }
          }
        }
      }`,
            {
              variables: { first: 5 }
            }
          ).then(({ data }) => {
            products = data.products.nodes;
          }).catch((err) => console.error(err)).finally(() => {
            loading = false;
            renderApp();
          });
          lines.subscribe(() => renderApp());
          const loadingState = root.createComponent(
            BlockStack,
            { spacing: "loose" },
            [
              root.createComponent(Divider),
              root.createComponent(Heading, { level: 2 }, ["You might also like"]),
              root.createComponent(BlockStack, { spacing: "loose" }, [
                root.createComponent(
                  InlineLayout,
                  {
                    spacing: "base",
                    columns: [64, "fill", "auto"],
                    blockAlignment: "center"
                  },
                  [
                    root.createComponent(SkeletonImage, { aspectRatio: 1 }),
                    root.createComponent(BlockStack, { spacing: "none" }, [
                      root.createComponent(SkeletonText, { inlineSize: "large" }),
                      root.createComponent(SkeletonText, { inlineSize: "small" })
                    ]),
                    root.createComponent(
                      Button,
                      { kind: "secondary", disabled: true },
                      [root.createText("Add")]
                    )
                  ]
                )
              ])
            ]
          );
          if (loading) {
            root.appendChild(loadingState);
          }
          const imageComponent = root.createComponent(Image, {
            border: "base",
            borderWidth: "base",
            borderRadius: "loose",
            aspectRatio: 1,
            source: ""
          });
          const titleMarkup = root.createText("");
          const priceMarkup = root.createText("");
          const merchandise = { id: "" };
          const addButtonComponent = root.createComponent(
            Button,
            {
              kind: "secondary",
              loading: false,
              onPress: () => __async(exports, null, function* () {
                addButtonComponent.updateProps({ loading: true });
                const result = yield applyCartLinesChange({
                  type: "addCartLine",
                  merchandiseId: merchandise.id,
                  quantity: 1
                });
                addButtonComponent.updateProps({ loading: false });
                if (result.type === "error") {
                  console.error(result.message);
                  const errorComponent = root.createComponent(
                    Banner,
                    { status: "critical" },
                    ["There was an issue adding this product. Please try again."]
                  );
                  const topLevelComponent = root.children[0];
                  topLevelComponent.appendChild(errorComponent);
                  setTimeout(
                    () => topLevelComponent.removeChild(errorComponent),
                    3e3
                  );
                }
              })
            },
            ["Add"]
          );
          const app = root.createComponent(BlockStack, { spacing: "loose" }, [
            root.createComponent(Divider),
            root.createComponent(Heading, { level: 3 }, "You could also like"),
            root.createComponent(BlockStack, { spacing: "loose" }, [
              root.createComponent(
                InlineLayout,
                {
                  spacing: "base",
                  // Use the `columns` property to set the width of the columns
                  // Image: column should be 64px wide
                  // BlockStack: column, which contains the title and price, should "fill" all available space
                  // Button: column should "auto" size based on the intrinsic width of the elements
                  columns: [64, "fill", "auto"],
                  blockAlignment: "center"
                },
                [
                  imageComponent,
                  root.createComponent(BlockStack, { spacing: "none" }, [
                    root.createComponent(
                      Text,
                      { size: "medium", emphasis: "strong" },
                      [titleMarkup]
                    ),
                    root.createComponent(Text, { appearance: "subdued" }, [
                      priceMarkup
                    ])
                  ]),
                  addButtonComponent
                ]
              )
            ])
          ]);
          function renderApp() {
            var _a, _b;
            if (loading) {
              return;
            }
            if (!loading && products.length === 0) {
              root.removeChild(loadingState);
              return;
            }
            const cartLineProductVariantIds = lines.current.map((item) => item.merchandise.id);
            const productsOnOffer = products.filter(
              (product) => {
                const isProductVariantInCart = product.variants.nodes.some(
                  ({ id }) => cartLineProductVariantIds.includes(id)
                );
                return !isProductVariantInCart;
              }
            );
            if (!loading && productsOnOffer.length === 0) {
              if (loadingState.parent)
                root.removeChild(loadingState);
              return;
            }
            const { images, title, variants } = productsOnOffer[0];
            const renderPrice = i18n.formatCurrency(variants.nodes[0].price.amount);
            const imageUrl = (_b = (_a = images.nodes[0]) == null ? void 0 : _a.url) != null ? _b : "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_medium.png?format=webp&v=1530129081";
            imageComponent.updateProps({ source: imageUrl });
            titleMarkup.updateText(title);
            addButtonComponent.updateProps({
              accessibilityLabel: `Add ${title} to cart`
            });
            priceMarkup.updateText(renderPrice);
            merchandise.id = variants.nodes[0].id;
            if (!appRendered) {
              root.removeChild(loadingState);
              root.appendChild(app);
              appRendered = true;
            }
          }
        }
      );
    }
  });

  // <stdin>
  var import_src = __toESM(require_src());
})();
