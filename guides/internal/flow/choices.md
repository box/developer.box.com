---
hide: true
rank: 3
category_id: internal
subcategory_id: internal/flow
is_index: false
id: internal/flow/choices
type: guide
total_steps: 5
sibling_id: internal/flow
parent_id: internal/flow
next_page_id: internal/flow/store
previous_page_id: internal/flow/observer
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/internal/flow/choices.md
---
<!-- does not need translation -->

# ChooseとChoice

`Choose`要素と`Choice`要素は、特にユーザーの選択内容を追跡するのに使用できます。これらの要素は、`Observe`イベントと`Trigger`イベントに関する便利な抽象化を提供します。

```html
<Grid columns='2'>

  <Choose option='example.choose_a' value='1' color='blue'>
    # Option 1

    Explantion of option
  </Choose>

  <Choose option='example.choose_a' value='2' color='red'>
    # Option 2

    Explanation of option
  </Choose>

</Grid>

<Choice option='example.choose_a' value='1' color='blue'>
  You chose option 1
</Choice>

<Choice option='example.choose_a' value='2' color='red'>
  You chose option 2
</Choice>
```

<H>

<Grid columns="2">

<Choose option="example.choose_a" value="1" color="blue">

# オプション1

オプションの説明

</Choose>

<Choose option="example.choose_a" value="2" color="red">

# オプション2

オプションの説明

</Choose>

</Grid>

<Choice option="example.choose_a" value="1" color="blue">

オプション1を選択しました

</Choice>

<Choice option="example.choose_a" value="2" color="red">

オプション2を選択しました

</Choice>

</H>

<Message notice>

選択内容はページを越えて追跡され、キー`com.box.developer.observable_events`を使用してローカルストレージに一定期間保持されます。ガイド全体で一意のオプション名と値を使用することが重要です。

</Message>

## スタイル

どちらの要素にも、`null` (デフォルトでグレー)、`green`、`red`、および`blue`という4つのテーマを使用できます。さらに、テーマを`none`に設定してパディングと背景を非表示にすることもできます。

```html
<Choose option='example.choose_c' color='none'>
  # Option 1

  Explanation of option
</Choose>
```

## 設定されていない選択肢の監視

場合によっては、値がまだ設定されていないときに何らかのテキストを表示することもできます。この場合は、`unset`オプションを使用して、代わりにイベントをリッスンするよう要素を設定します。

```html
<Choose option='example.choose_b' value='1'>
  # Option 1

  Explanation of option
</Choose>

<Choice option='example.choose_b' unset>
  This should show by default and hide when the above choice is clicked.
</Choice>
```

<H>

<Choose option="example.choose_b" value="1">

# オプション1

オプションの説明

</Choose>

<Choice option="example.choose_b" unset>

これはデフォルトで表示され、上の選択肢がクリックされると非表示になります。

</Choice>

</H>

## 遅延読み込み

デフォルトで、`Choice`要素のコンテンツは読み込まれた後に非表示になります。要素を遅延読み込みするには、`lazy`属性を渡します。

```html
<Choice option='example.lazy' value='value'>
  The content of this element is rendered on page load
</Choice>

<Choice option='example.lazy' value='value' lazy>
  The content of this element is not rendered until the right event is triggered.
</Choice>
```
