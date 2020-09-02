---
rank: 2
related_endpoints: []
related_guides:
  - applications/custom-skills
  - applications/custom-skills/setup
related_pages: []
required_guides: []
related_resources: []
alias_paths:
  - /docs/explore-box-skill-samples
  - /docs/sample-box-skills-projects
category_id: skills
subcategory_id: null
is_index: false
id: skills/examples
type: guide
total_steps: 3
sibling_id: skills
parent_id: skills
next_page_id: skills/kit
previous_page_id: skills/invocation-url
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/skills/examples.md
---
# コミュニティのサンプルスキル

コミュニティのサンプルスキルとして、Box開発者コミュニティが生成したスキルサンプルが公開されています。これらは**ドキュメントスキル**、**画像スキル**、**動画スキル**、**音声スキル**という4つの主要カテゴリに分かれており、各スキルを使用して、関連するカテゴリに該当するファイルを処理することができます。

<Message warning>

コミュニティのサンプルスキルはコミュニティで作成、管理されており、Boxが所有または管理するものではありません。

</Message>

プロジェクトを投稿する方法については、[投稿ガイドライン][contributing_guidelines]を参照してください。

<CTA to="https://github.com/box-community">

GitHubにあるSkillsサンプルの全一覧を表示する

</CTA>

## ドキュメントスキル

Boxでのドキュメントファイルの処理に関するBox Skillsサンプル

<!-- markdownlint-disable line-length -->

| 名前                                      | 説明                                                                                                                |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| [Levertonによる賃貸契約書からの抽出][leverton](Node) | [Leverton API][leverton_ml]を使用すると、賃貸契約書から住所、家主、テナント、家賃などのフィールドを自動的に抽出し、その情報を該当するファイルにSkillsメタデータカードとして添付できます。     |
| [Rossumによる請求書情報収集][rossum](Node)        | [Rossum API][rossum_ml]を使用すると、請求書から金額、税の詳細、請求書ID、差出人名、受取人名などのフィールドを自動的に抽出し、その情報を該当するファイルにSkillsメタデータカードとして添付できます。 |

<!-- markdownlint-enable line-length -->

## 画像スキル

Boxでの画像ファイルの処理に関するBox Skillsサンプル

<!-- markdownlint-disable line-length -->

| 名前                                                     | 説明                                                                                                                                        |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| [Acuant AssureIDによる政府発行IDデータの抽出][image_acuant](Node)   | [Acuant AssureID][image_acuant_ml]を使用すると、政府発行IDから名前、電話番号、住所などのメタデータを分類して自動的に抽出し、その情報をSkillsメタデータカードとしてBox内の該当する画像ファイルに追加できます。             |
| [Amazon Rekognitionによるラベルの抽出][image_rekognition](Node) | [Amazon Rekognition API][image_rekognition_ml]を使用すると、指定された画像に含まれるラベル(オブジェクト、イベント、またはコンセプトを表す)を自動的に抽出し、該当する画像ファイルにSkillsメタデータカードとして追加できます。 |
| [EXIF/XMP `MetaInfo`の抽出][image_exif](Node)             | 10年にわたりオープンソースで開発されてきた[Exiftool][image_exif_ml]のJavaScript書き換えを使用して、ファイルから多数の`MetaInfo`を読み取ります。すべての画像、音声、動画ファイルに対して使用できます。                |
| [Google Product Searchによる認識][image_google_prod](Node)  | [Google Cloud Vision Product Search][image_google_prod_ml]を使用すると、Box内の画像と、事前トレーニング済みのプロダクトカタログの画像を比較できます。                                 |
| [Googleによる画像のテキストとトピックの抽出][image_google_image](Node)   | [Google Cloud Vision API][image_google_image_ml]を使用すると、汎用的なGoogle画像検索の機械学習モデルを使用して識別を実施し、画像のテキストとトピックを抽出できます。                             |
| [Hive Predictによる顔認識][image_hive](Node)                 | [Hive Predict API][image_hive_ml]を使用すると、画像内の顔を自動的に認識し、その顔をSkillsメタデータカードとしてBox内の該当する画像に割り当てられます。                                          |
| [Microsoftによる画像のテキストとトピックの抽出][image_ms_image](Node)    | [Microsoft Vision API][image_ms_image_ml]を使用すると、汎用的なBing画像検索の機械学習モデルを使用して識別を実施し、画像のテキストとトピックを抽出できます。                                      |

<!-- markdownlint-enable line-length -->

## 動画スキル

Boxでの動画ファイルの処理に関するBox Skillsサンプル

<!-- markdownlint-disable line-length -->

| 名前                                                                 | 説明                                                                                                                                                       |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Microsoft Azureによる動画の顔、トランスクリプト、トピックの抽出][video_azure_video](Node) | [Microsoft Azure Media Services][video_azure_video_ml]を使用すると、動画ファイルから顔、トピック、およびトランスクリプトを抽出し、その情報をファイルのメタデータとしてBoxに書き戻すことができます。また、それを字幕として動画に埋め込むこともできます。 |

<!-- markdownlint-enable line-length -->

## 音声スキル

Boxでの音声ファイルの処理に関するBox Skillsサンプル

<!-- markdownlint-disable line-length -->

| 名前                                                                    | 説明                                                                                                                                                                          |
| --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [IBMのSpeech to Textによる音声の書き起こし][audio_ibm_speech](Node)               | [IBM Watson Speech to Text][audio_ibm_speech_ml]を使用すると、音声ファイルからトランスクリプトを抽出し、それをファイルのメタデータとしてBoxに書き戻すことができます。                                                                |
| [Microsoft Azureによるトランスクリプトとトピックの検出][audio_ms_azure_transcript](Node) | [Microsoft Azure Media Services][audio_ms_azure_transcript_ml]を使用すると、音声ファイルからトピックおよびトランスクリプトを抽出し、それをファイルのメタデータとしてBoxに書き戻すことができます。                                           |
| [VoiceBaseによるデュアルチャンネルオーディオの分析][audio_voicebase](Node)                | [VoiceBase API][audio_voicebase_ml]を使用すると、音声ファイルからトランスクリプト、トピック、通話メトリック、機密情報などのデータインサイトを自動的に抽出し、BoxプレビューのSkillsメタデータカードとして該当するファイルに添付できます。このスキルは、特にコールセンターの音声ファイル分析に適しています。 |

<!-- markdownlint-enable line-length -->

[audio_ibm_speech]: https://github.com/box-community/sample-audio-skills/blob/master/ibm-watson-transcript-extraction

[audio_ibm_speech_ml]: https://www.ibm.com/watson/services/speech-to-text/

[audio_ms_azure_transcript]: https://github.com/box-community/sample-audio-skills/blob/master/microsoft-azure-transcript-topics-detection

[audio_ms_azure_transcript_ml]: https://docs.microsoft.com/en-us/azure/media-services/latest/analyzing-video-audio-files-concept

[audio_voicebase]: https://github.com/box-community/sample-audio-skills/blob/master/voicebase-callcenter-audio-analysis

[audio_voicebase_ml]: https://developer.voicebase.com/

[leverton]: https://github.com/box-community/sample-document-skills/blob/master/leverton-lease-extraction

[leverton_ml]: https://www.leverton.ai/

[rossum]: https://github.com/box-community/sample-document-skills/blob/master/rossum-invoice-intelligence

[rossum_ml]: https://rossum.ai/

[image_acuant]: https://github.com/box-community/sample-image-skills/blob/master/acuant-assureid-goverment-id-data-extraction

[image_acuant_ml]: https://www.acuantcorp.com/products/assureid-identity-verification-software/

[image_rekognition]: https://github.com/box-community/sample-image-skills/blob/master/amazon-rekognition-labels-detection

[image_rekognition_ml]: https://aws.amazon.com/rekognition

[image_exif]: https://github.com/box-community/sample-image-skills/blob/master/exiftool-metainfo-extraction

[image_exif_ml]: https://github.com/exiftool/exiftool

[image_google_prod]: https://github.com/box-community/sample-image-skills/blob/master/google-product-search-integration

[image_google_prod_ml]: https://cloud.google.com/vision/product-search/docs/

[image_google_image]: https://github.com/box-community/sample-image-skills/blob/master/google-vision-text-topics-detection

[image_google_image_ml]: https://cloud.google.com/vision

[image_hive]: https://github.com/box-community/sample-image-skills/blob/master/hive-predict-face-recognition

[image_hive_ml]: https://thehive.ai/predict

[image_ms_image]: https://github.com/box-community/sample-image-skills/blob/master/microsoft-vision-text-topics-detection

[image_ms_image_ml]: https://cloud.google.com/vision/

[video_azure_video]: https://github.com/box-community/sample-video-skills/blob/master/microsoft-azure-faces-transcript-topics-detection

[video_azure_video_ml]: https://docs.microsoft.com/en-us/azure/media-services/latest/analyzing-video-audio-files-concept

[contributing_guidelines]: https://github.com/box-community/community-guidelines/blob/master/.github/CONTRIBUTING.md
