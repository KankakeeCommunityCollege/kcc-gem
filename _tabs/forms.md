---
name: Forms
tabs_page: KCC Gem
order: 3
online_forms:
- key: 52576796595982
  title: Cooperative Agreement
- key: 220174297312047
  title: Diploma/Certificate Request
- key: 201044647339050
  title: Enrollment Status Request
- key: 52505626671961
  title: Enrollment Verification
- key: 70866264246967
  title: Summer visiting student registration
- key: 52565419679975
  title: Transcript evaluation request
- key: 201244411503034
  title: Tuition/Transcript Waiver for Employees and Retirees
- key: 202925305454149
  title: Verification of Non-enrollment
---

##### Admissions forms
{: .typography__h4}

* [Change of Schedule](./uploads/pdf/change%20of%20schedule%20form.pdf){: target="_blank" rel="noopener noreferrer"}
* [Temporary transfer form](./uploads/pdf/temp-transfer.pdf){: target="_blank" rel="noopener noreferrer"}
* Tuition refund/Late withdrawal request - See [Cancellations, Withdrawals and Refunds](../academics/register/#cancellations-withdrawals-and-refunds)

###### Online forms
{: .typography__h5}

<div class="text-center text-md-left"><div id="onlineFormsGroup" class="btn-group-vertical ml-md-4 mt-3 mb-4" role="group" aria-label="online-forms">{% assign page_forms = page.online_forms | sort: 'title' %} {% for item in page_forms %}<button type="button" data-toggle="modal" data-form-id="{{ item.key }}" data-target="#form-modal" class="btn btn-outline-primary">{{ item.title }}</button> {% endfor %}</div></div>
