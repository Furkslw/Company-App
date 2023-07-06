const send = (event, params) => {
  console.log("[gtag:send]", event, params);
  window.gtag?.("event", event, params);
};

const error = (type, value) => {
  send("error", {
    type,
    value,
  });
};

const locale = (id) => {
  send("locale", {
    id,
  });
};

const offer_form = (params) => {
  send("offer_form", params);
};

const pick_offer = (offer_id, request_id) => {
  send("pick_offer", {
    offer_id,
    request_id,
  });
};

const select_category = (item_id, main = 1) => {
  send("select_category", {
    item_id,
  });

  if (main) return;

  send("select_category_sub", {
    item_id,
  });
};

const select_content = (content_type, item_id, select = 1, value) => {
  send(select ? "select_content" : "deselect_content", {
    content_type,
    item_id,
    value,
  });
};

const select_item = (item_id, params) => {
  send("select_item", {
    ...params,
    item_id,
  });
};

const search = (search_term, item_id) => {
  send("search", {
    search_term,
    item_id,
  });
};

const utm = (content_type, item_id) => {
  send("utm", {
    content_type,
    item_id,
    from: window?.location?.toString?.(),
  });
};

const GtagClient = {
  error,
  locale,
  offer_form,
  pick_offer,
  search,
  select_category,
  select_content,
  select_item,
  send,
  utm,
};

export default GtagClient;
