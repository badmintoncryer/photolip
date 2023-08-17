module.exports = {
  types: [
    {
      value: "feat",
      name: "🌟 feat: 機能追加",
      title: "Features",
    },
    {
      value: "fix",
      name: "🔧 fix: バグの修正",
      title: "Bug Fixes",
    },
    {
      value: "docs",
      name: "🗒 docs: ドキュメントのみの変更",
      title: "Documentation",
    },
    {
      value: "style",
      name: "🎨 style: コードの動作に影響しない、見た目だけの変更（スペース、フォーマット、欠落の修正、セミコロンなど)",
      title: "Styles",
    },
    {
      value: "refactor",
      name: "♻️ refactor: バグの修正や機能の追加ではないコードの変更",
      title: "Code Refactoring",
    },
    {
      value: "perf",
      name: "⏫ perf: パフォーマンスを向上させるコードの変更",
      title: "Performance",
    },
    {
      value: "test",
      name: "🧪 test: 不足しているテストの追加や既存のテストの修正",
      title: "Tests",
    },
    {
      value: "chore",
      name: "🐧 chore: ビルドプロセスやドキュメント生成などの補助ツールやライブラリの変更",
      title: "Chores",
    },
  ],
  messages: {
    type: "コミットする変更タイプを選択してください:\n",
    subject: "コミット内容について入力してください:\n",
    confirmCommit: "こちらの内容でコミットを実行してよろしいですか？:\n",
    /* ticketNumber: 'チケット番号を入力してください (ない場合はEnter):\n',*/
  },
  skipQuestions: ["scope", "body", "breaking"],
  allowBreakingChanges: ["feat", "fix"],
  /*
  コミットメッセージにチケット番号を追加したい場合コメントを削除
  allowTicketNumber: true,
  isTicketNumberRequired: false,
  ticketNumberPrefix: '',
  ticketNumberRegExp: '',
  */
};
